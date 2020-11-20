import java.util.Scanner;

public class WhileEx03 {
	public static void main(String[] args) {
		boolean stop = false;
		int num;
		while(!stop) {
			System.out.println("두개의 정수를 입력하셔야합니다.");
			Scanner sc=new Scanner(System.in);
			System.out.println("첫번째 수를 입력하세요.");
			int num1 = sc.nextInt();
			System.out.println("두번째 수를 입력하세요.");
			int num2 = sc.nextInt();
			System.out.println("어떤 연산을 하시겠어요? + - X / %");
			String k = sc.next();
			int p = 100;
			/*???퍼센트 구하기 ???*/
			
			// System.out.println("sc"+k);
			if(k.equals("X")) {
				num = num1 * num2;
				System.out.println(num + "X" +num2+ "=" + num);
			}
			if(k.equals("+")) {
				num = num1 + num2;
				System.out.println(num + "+" +num2+ "=" + num);
				}
			if(k.equals("-")) {
				num = num1 - num2;
				System.out.println(num + "-" +num2+ "=" + num);
				}
			if(k.equals("/")) {
				num = num1 / num2;
				System.out.println(num + "/" +num2+ "=" + num);
				}
			if(k.equals("%")) {
				num = (num1/num2)*p;
				System.out.println((num1 + "/" +num2)+ "X"+ p + "=" + num +"%");
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

