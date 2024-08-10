import java.util.*;
public class MyClass2 {
	public static void main(String args[]){
		int employeeId;
		String employeeName;
		float employeeSalary;
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter employee id");
		employeeId = sc.nextInt();
		System.out.println("Enter employee name");
		employeeName = sc.next();
		System.out.println("Enter employee salary");
		employeeSalary=sc.nextFloat();
		
		System.out.println(employeeId);
		System.out.println(employeeName);
		System.out.println(employeeSalary);


	}
}