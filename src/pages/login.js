import '../style/Login.css';

function Login() {
  return (
    <div className="Login_page">
        <div className='container_login'>
            <div className="imagem_login_div">
            <img className="imagem_login" src="teste.png" alt="logo"/>
            </div>
            <div className='input_div_login'>
            <input className='input_login' placeholder='Login'/>
            </div>
            <div  className='input_div_login'>
            <input className='input_login' placeholder='Senha'/>
            </div>
            <div className='button_login_div'>
                <button className='button_login'>ENTRAR</button>
            </div>
        </div>
    </div>
  );
}

export default Login;