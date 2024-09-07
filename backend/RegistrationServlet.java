@WebServlet("/register")
public class RegistrationServlet extends HttpServlet {
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
        RegistrationRequest regRequest = gson.fromJson(reader, RegistrationRequest.class);

        String uname = regRequest.getName();
        String uemail = regRequest.getEmail();
        String upwd = regRequest.getPass();
        String umobile = regRequest.getContact();
        List<KeystrokeData> keystrokeData = regRequest.getKeystrokeData();

        // Perform registration logic
        // ...

        // Send JSON response
        PrintWriter out = response.getWriter();
        RegistrationResponse regResponse = new RegistrationResponse(/* set appropriate fields */);
        out.print(gson.toJson(regResponse));
        out.flush();
    }
}