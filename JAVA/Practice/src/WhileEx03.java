import java.util.Scanner;

public class WhileEx03 {
	public static void main(String[] args) {
		boolean stop = false;
		int num;
		while(!stop) {
			System.out.println("�ΰ��� ������ �Է��ϼž��մϴ�.");
			Scanner sc=new Scanner(System.in);
			System.out.println("ù��° ���� �Է��ϼ���.");
			int num1 = sc.nextInt();
			System.out.println("�ι�° ���� �Է��ϼ���.");
			int num2 = sc.nextInt();
			System.out.println("� ������ �Ͻðھ��? + - X / %");
			String k = sc.next();
			int p = 100;
			/*???�ۼ�Ʈ ���ϱ� ???*/
			
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
			
			System.out.println("��� Y, ���� N �Է�");
			String yn = sc.next();
			if (yn.equals("Y") || yn.equals("y")) {
				System.out.println("----------------");
				continue;
			}
			if (yn.equals("N") || yn.equals("n")) {
			break;
		}
	}
	System.out.println("�ý����� ����Ǿ����ϴ�.");
	}
}

