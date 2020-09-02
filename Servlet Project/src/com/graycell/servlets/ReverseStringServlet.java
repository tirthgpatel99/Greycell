package com.graycell.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ReverseStringServlet
 */
@WebServlet("/reverseStringServlet")
public class ReverseStringServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ReverseStringServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();

		String paragraghString = request.getParameter("paragraphString");
		out.write(reverseString(paragraghString));
		out.close();
		doGet(request, response);
	}

	private String reverseString(String originalString) {
		if (originalString != null && originalString.trim().length() > 0) {
			String lines[] = originalString.split("\\.");
			if (null != lines && lines.length > 0) {
				String reversedString = "";
				for (int i = 0; i <= lines.length - 1; i++) {
					if (lines[i] != null && lines[i].trim().length() > 0) {
						String words[] = lines[i].trim().split(" ");
						if (null != words && words.length > 2) {
							for (int j = words.length - 3; j >= 0; j--) {
								reversedString += " " + words[j];
							}

							for (int j = words.length - 2; j <= words.length - 1; j++) {
								reversedString += " " + words[j];
							}
							reversedString += ".";
						} else {
							reversedString += lines[i] + ". ";
						}
					}
				}
				return "Reversed String:" + reversedString.trim();
			}
		} else {
			return "Please Enter Valid String.";
		}
		return "Reversed String:";
	}
}
