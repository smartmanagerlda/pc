const { ipcRenderer } = require('electron');
const ipc = ipcRenderer
const loginForm = document.querySelector('.loginForm');
const alerta = document.querySelector('.alerta');
const empresa = document.getElementById('nomeEmpresa');
const usuario = document.getElementById('nomeUsuario');
const senha = document.getElementById('senha');
const url = 'https://stocksmanager1.herokuapp.com/pequenasEmpresasClientes/login';
const alerrt1 = `<div class="alert alert-warning text-center" role="alert">
A Empresa não existe!!!
</div>`;
const alerrt2 = `<div class="alert alert-warning text-center" role="alert">
Senha Invalida ou o Usuários não existe!!!
</div>`;

//Create - Login User

loginForm.addEventListener('submit', (e) => {
    if (navigator.onLine == true) {
        e.preventDefault();
        document.getElementById("alertaSucesso").innerHTML = `
            <div class="alert alert-info" role="alert">
                                <div class="text-center">
                                    <h6>Por favor aguarde!!!</h6>
                                </div> 
            </div>`
            ;
        setTimeout(function () {
            document.getElementById("alertaSucesso").innerHTML = '';
        }, 4000);
        console.log(empresa.value);
        const url2 = `https://stocksmanager1.herokuapp.com/getAllDataPequenas/${empresa.value}`;
        const urlLogIn = 'https://stocksmanager1.herokuapp.com/pequenasEmpresas/login';
        // console.log(usuario.value);
        // console.log(senha.value);

        fetch(url2)
            .then(res => res.json())
            .then(content => {
                console.log(content[0]);
                if (content.length === 0) {
                    console.log('vazio');
                    alerta.innerHTML = alerrt1;
                    setTimeout(function () {
                        alerta.innerHTML = '';
                    }, 8000);
                } else {
                    const funcionarios = content[0]['funcionarios'];
                    console.log(funcionarios);

                    var i = 0;
                    while (i < funcionarios.length) {
                        const funcionario = content[0]['funcionarios'][i]['nomeFuncionario'];
                        const statusPagamento = content[0]['statusPagamento'];
                        const senhaGeral = content[0]['password'];
                        const avenidaLocalizacao = content[0]['avenidaLocalizacao'];
                        const bancoNIB = content[0]['bancoNIB'];
                        const empresaNUIT = content[0]['empresaNUIT'];
                        const senh = content[0]['funcionarios'][i]['password'];
                        const designation = content[0]['funcionarios'][i]['designation'];
                        console.log(funcionario);
                        if (funcionario == usuario.value) {
                            if (senh == senha.value && usuario.value == funcionario) {
                                localStorage.setItem('empresa', `${empresa.value}`);
                                localStorage.setItem('usuario', `${usuario.value}`);
                                localStorage.setItem('empresaNUITa', empresaNUIT);
                                localStorage.setItem('bancoNIBa', bancoNIB);
                                localStorage.setItem('avenidaLocalizacaoa', avenidaLocalizacao);
                                console.log('sucesso!!!')
                                if (designation == "Operador") {
                                    if (statusPagamento == "Pago") {
                                        document.getElementById("alertaSucesso").innerHTML = `
                                            <div class="alert alert-info" role="alert">
                                                                <div class="text-center">
                                                                    <h6>Por Favor Aguarde!!!</h6>
                                                                </div> 
                                            </div>`
                                            ;
                                        setTimeout(function () {
                                            document.getElementById("alertaSucesso").innerHTML = '';
                                        }, 8000);

                                        fetch(urlLogIn, {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                nomeEmpresa: empresa.value,
                                                password: senhaGeral
                                            })
                                        }).then(res => res.json())
                                            .then(data => {
                                                const dataArr = [];
                                                dataArr.push(data);
                                                localStorage.setItem('token', data.token);
                                                console.log(data.token);
                                                console.log(data);
                                                console.log(content[0]);
                                                const token = data.token;
                                                let h = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                                                var m = new Date();
                                                var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes();
                                                const usuarioLogs = localStorage.getItem('usuario');
                                                const urlLogs = 'https://stocksmanager1.herokuapp.com/logs';
                                                let logs = new Request(urlLogs, {
                                                    method: 'PATCH',
                                                    headers: h,
                                                    body: JSON.stringify({
                                                        "nomeFuncionario": `${usuarioLogs}`,
                                                        "historico": `O Colaborador ${usuarioLogs} abriu o Caixa`,
                                                        "data": `${dateString}`
                                                    })
                                                });
                                                fetch(logs)
                                                    .then(ress => ress.json())
                                                    .then(data5Logs => {
                                                        console.log(data5Logs)
                                                        ipc.send('caixa');
                                                    });

                                            })
                                    } else {
                                        document.getElementById("alertaSucesso").innerHTML = `
                                            <div class="alert alert-info" role="alert">
                                                                <div class="text-center">
                                                                    <h6>Conta Inactiva!!!</h6>
                                                                </div> 
                                            </div>`
                                            ;
                                        setTimeout(function () {
                                            document.getElementById("alertaSucesso").innerHTML = '';
                                        }, 8000);
                                    }

                                } else {
                                    if (statusPagamento == "Pago") {
                                        document.getElementById("alertaSucesso").innerHTML = `
                                            <div class="alert alert-info" role="alert">
                                                                <div class="text-center">
                                                                    <h6>Por Favor Aguarde!!!</h6>
                                                                </div> 
                                            </div>`
                                            ;
                                        setTimeout(function () {
                                            document.getElementById("alertaSucesso").innerHTML = '';
                                        }, 8000);

                                        fetch(urlLogIn, {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                nomeEmpresa: empresa.value,
                                                password: senhaGeral
                                            })
                                        }).then(res => res.json())
                                            .then(data => {
                                                const dataArr = [];
                                                dataArr.push(data);
                                                localStorage.setItem('token', data.token);
                                                window.location = '../src/base/inicio.html';
                                                console.log(data.token)
                                                console.log(senhaGeral)
                                            })
                                    } else {
                                        document.getElementById("alertaSucesso").innerHTML = `
                                    <div class="alert alert-info" role="alert">
                                                        <div class="text-center">
                                                            <h6>Conta Inactiva!!!!</h6>
                                                        </div> 
                                    </div>`
                                            ;
                                        setTimeout(function () {
                                            document.getElementById("alertaSucesso").innerHTML = '';
                                        }, 8000);
                                    }

                                }

                            } else {
                                alerta.innerHTML = alerrt2;
                                setTimeout(function () {
                                    alerta.innerHTML = '';
                                }, 4000);
                            }
                        } else {

                        }
                        i++;
                    }

                }
            })


    } else {
        e.preventDefault();
        document.getElementById("alertaSucesso").innerHTML = `
            <div class="alert alert-info" role="alert">
                                <div class="text-center">
                                    <h6>Sem conecção a internet!!!</h6>
                                </div> 
            </div>`
            ;
        setTimeout(function () {
            document.getElementById("alertaSucesso").innerHTML = '';
        }, 8000);
    }

})