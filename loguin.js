<!DOCTYPE html>
<html>
<head>
	<title>Formulário de Login</title>
	<script type="text/javascript">
		function validate() {
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			if (username == "user" && password == "pass") {
				alert("Login bem-sucedido!");
			} else {
				alert("Usuário ou senha incorretos!");
			}
		}
	</script>
</head>
<body>
	<h2>Formulário de Login</h2>
	<form>
		<label for="username">Usuário:</label>
		<input type="text" id="username" name="username"><br><br>
		<label for="password">Senha:</label>
		<input type="password" id="password" name="password"><br><br>
		<input type="button" value="Entrar" onclick="validate()">
	</form>
</body>
</html>
