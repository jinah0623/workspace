import java.util.Scanner;

public class Scanner_Money2 {
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		System.out.println("얼마?");

		int money = sc.nextInt();

		int b = 0;

		int o = 0;

		int c = 0;

		int count = 0;


		if (money%10000 == 0) {

			int x = money / 1000;

			System.out.println("천원"+x+"장");

			System.out.println("오백원 0개");

			System.out.println("백원 0 개");

		}

		else {
			count = money / c;
			count = (money / c)/o;
			count = ((money/c)/o)/b;
			
			System.out.println(count +"입니다.");
			
			/* for(int y=0; y<=3; y++) {

				count = money / c;

				System.out.println("만원"+count+"장");

				money = money-(count*c); //입력 금액-천원단위금액 */

			}
		}
	}
