import java.util.Scanner;
	
	public class Calculate_scanner{
		public static void main(String[] args) {
			Scanner sc = new Scanner(System.in);
			System.out.println("������ �Է�(+,-.*,/)");
			String a = sc.next();
			System.out.println("ù��° ����:");
			int num1 = sc.nextInt();
			System.out.println("�ι�° ����");
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
				System.out.println("�����ڸ� Ȯ���� �ּ���");
			}
			System.out.println(num1+a+num2+"="+result);
		}
	}
