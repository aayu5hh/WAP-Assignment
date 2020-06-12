import java.util.HashMap;

public class CreateUsers {

    private HashMap<String, User> userMap = new HashMap<>();

    public CreateUsers() {
        userMap.put("Ayush", new User("Ayush", "abc"));
        userMap.put("Elsa", new User("Elsa", "cde"));
    }
}
