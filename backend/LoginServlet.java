@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
       
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Enable CORS
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        // Read JSON from request body
        BufferedReader reader = request.getReader();
        Gson gson = new Gson();
        LoginRequest loginRequest = gson.fromJson(reader, LoginRequest.class);

        String uemail = loginRequest.getUsername();
        String upwd = loginRequest.getPassword();
        List<KeystrokeData> keystrokeData = loginRequest.getKeystrokeData();

        // Validate input and perform login logic
        // ...

        // Send JSON response
        PrintWriter out = response.getWriter();
        LoginResponse loginResponse = new LoginResponse(/* set appropriate fields */);
        out.print(gson.toJson(loginResponse));
        out.flush();
    }
}