<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Reverse string</title>
</head>
<body>
	<form action="reverseStringServlet" method="POST">
		<table>
			<tr>
				<td>Paragraph: <textarea cols="100" rows="5"
						name="paragraphString"></textarea><br />
				<br />
				</td>
			</tr>
			<tr>
				<td><input type="submit" value="Reverse String" /></td>
			</tr>
		</table>
	</form>
</body>
</html>