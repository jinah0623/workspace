
import java.util.Scanner;

	public class Number_Scanner {

		public static void main(String[] args) {



			System.out.println("입력할 정수는?");

			Scanner num = new Scanner(System.in);

			int a = num.nextInt();

			System.out.println("입력받은 숫자는: "+a);


			int sum=0;
			for (int b=0; b<=a; b++) {

				if(b%2==1)

					sum += b;



			}

			System.out.println(sum);

}

}

