import java.util.Scanner;
	
	public class Calculate_scanner{
		public static void main(String[] args) {
			Scanner sc = new Scanner(System.in);
			System.out.println("연산자 입력(+,-.*,/)");
			String a = sc.next();
			System.out.println("첫번째 숫자:");
			int num1 = sc.nextInt();
			System.out.println("두번째 숫자");
			int num2=sc.nextInt();
			
			int result =0;
			switch(a) {
			case "+":
				result = num1 + num2;
				break;
			case "-":
				result= num1 - num2;
				break;
			case "*":
				result = num1 * num2;
				break;
			case "/":
				result=num1/num2;
				break;
			default:
				System.out.println("연산자를 확인해 주세요");
			}
			System.out.println(num1+a+num2+"="+result);
		}
	}
