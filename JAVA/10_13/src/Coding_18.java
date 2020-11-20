import java.util.Scanner;

public class Coding_18 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		boolean stop = false;
		int num;
		Calculator_Plus cp = new Calculator_Plus();
		
		Calculator_Minus cm = new Calculator_Minus();
		
		Calculator_multiple mul = new Calculator_multiple();
		
		Calculator_division cd = new Calculator_division();	
		
		while(!stop) {
			System.out.println("두 정수를 입력하세요");
			Scanner sc = new Scanner(System.in);;
			
			System.out.println("첫번째 수를 입력하세요.");
			int num1 = sc.nextInt();
			
			System.out.println("두번째 수를 입력하세요.");
			int num2 = sc.nextInt();
			
			System.out.println("어떤 연산을 하시겠어요? + - X /");
			String k = sc.next();
			
			if(k.equals("X")) {
				num = num1 * num2;
				System.out.println(num1 + "X" +num2+ "=" + num);
			}
			if(k.equals("+")) {
				num = num1 + num2;
				System.out.println(num1 + "+" +num2+ "=" + num);
				}
			if(k.equals("-")) {
				num = num1 - num2;
				System.out.println(num1 + "-" +num2+ "=" + num);
				}
			if(k.equals("/")) {
				num = num1 / num2;
				System.out.println(num1 + "/" +num2+ "=" + num);
				}
			
			System.out.println("계속 Y, 종료 N 입력");
			String yn = sc.next();
			if (yn.equals("Y") || yn.equals("y")) {
				System.out.println("----------------");
				continue;
			}
			if (yn.equals("N") || yn.equals("n")) {
			break;
		}
	}
	System.out.println("시스템이 종료되었습니다.");
	}

	}

