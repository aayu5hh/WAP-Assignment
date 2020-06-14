<%--
  Created by IntelliJ IDEA.
  User: Aayush
  Date: 6/13/2020
  Time: 6:34 PM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Shopping Cart</title>

  <link rel="stylesheet" href="resources/css/style.css" media="screen" title="no title" charset="utf-8">
  <script src="https://code.jquery.com/jquery-2.2.4.js" charset="utf-8"></script>
  <script type="text/javascript" src="resources/js/cart.js"></script>
  <meta name="robots" content="noindex,follow" />
</head>
<body>
<div class="shopping-cart">
  <!-- Title -->
  <div class="title">
    Items Available
  </div>

  <c:forEach items="${products}" var="product">
    <div class="item">
      <div class="buttons">
        <span class="delete-btn"></span>
        <span class="like-btn"></span>
      </div>

      <div class="image">
        <img src="resources/images/${product.imgName}" alt="" />
      </div>

      <div class="description">
        <span>${product.name}</span>
      </div>

      <div class="quantity">
        <button class="plus-btn" type="button" name="button">
          <img src="resources/images/plus.svg" alt="" />
        </button>
        <input type="text" name="name" value="1">
        <button class="minus-btn" type="button" name="button">
          <img src="resources/images/minus.svg" alt="" />
        </button>
      </div>

      <div class="total-price">${product.price}</div>

      <div class="addCart">
        <button class="myBtn" type="button" name="button">Add to Cart</button>
      </div>
    </div>
  </c:forEach>

</div>
</body>
</html>

