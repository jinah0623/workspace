import java.util.Scanner;

public class Scanner_Money2 {
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		System.out.println("��?");

		int money = sc.nextInt();

		int b = 0;

		int o = 0;

		int c = 0;

		int count = 0;


		if (money%10000 == 0) {

			int x = money / 1000;

			System.out.println("õ��"+x+"��");

			System.out.println("����� 0��");

			System.out.println("��� 0 ��");

		}

		else {
			count = money / c;
			count = (money / c)/o;
			count = ((money/c)/o)/b;
			
			System.out.println(count +"�Դϴ�.");
			
			/* for(int y=0; y<=3; y++) {

				count = money / c;

				System.out.println("����"+count+"��");

				money = money-(count*c); //�Է� �ݾ�-õ�������ݾ� */

			}
		}
	}
