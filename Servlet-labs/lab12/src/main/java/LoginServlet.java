import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    CreateUsers users;

    @Override
    public void init() throws ServletException {
        super.init();
        users = new CreateUsers();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("login.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String userName = req.getParameter("user_name");
        String password = req.getParameter("password");
        String remember = req.getParameter("remember");
        HttpSession session = req.getSession();

        if(userName.equals("Ayush") && password.equals("abc")) {

            session.setAttribute("user_info", userName);
            if("yes".equals(remember)){

                Cookie c = new Cookie("user", userName);
                c.setMaxAge(60*60*24*30);
                resp.addCookie(c);

            } else {
                Cookie c = new Cookie("user", null);
                c.setMaxAge(0);
                resp.addCookie(c);
            }
            resp.sendRedirect("welcome.jsp");

        } else {
            session.setAttribute("err_msg", "Invalid username or password");
            resp.sendRedirect("login");
        }
    }
}
