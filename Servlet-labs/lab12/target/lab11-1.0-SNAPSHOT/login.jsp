<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Lab 12</title>
</head>
<body>
<form action="login" method="post">
    User Name: <input type="text" name="user_name" value="${cookie.user.value}"> <br>
    Password: <input type="password" name="password"> <br>
    Remember Me: <input type="checkbox"
                        <c:if test="${cookie.containsKey('user')}">checked</c:if> name="remember" value="yes"> <br>
    <input type="submit" value="submit">
</form>
<br>
<span style="color:red">${err_msg}</span>
</body>
</html>