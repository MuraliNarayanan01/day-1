package CoreJava.Assignments;

public class OBjects {
    String make;
    String model;
    String year;

    // Constructor
    OBjects(String make, String model, String year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    public static void main(String[] args) {
        OBjects obj = new OBjects("I am ","the ","Alien");
        System.out.println(obj.make+obj.model+obj.year);
    }
}
