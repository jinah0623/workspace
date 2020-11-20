import java.util.Scanner;
public class Scanner_Money1{
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		System.out.println("얼마?");

		int money = sc.nextInt();

		int b = 0;	 //백원

		int o = 0; 	//오백원

		int c = 0; 	//천원

		int m = 0; 	//만원


		b = money / 100; //100원 단위로 변환
		System.out.println("백원"+b+"개");
		
		o = money / 500; //500원 단위로 변환 
		System.out.println("오백원"+o+"개");
		
		c = money / 1000; //1000원 단위로 변환
		System.out.println("천원"+c+"장");
		
		m = money / 10000; //10000원 단위로 변환
		System.out.println("만원"+m+"장");
	}
}



