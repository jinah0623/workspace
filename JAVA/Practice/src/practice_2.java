import java.util.Scanner;

public class practice_2 {
	public static void main(String[] args) {	
		
		Scanner sc = new Scanner(System.in);
		System.out.println("입력해주세요 ");
		int i = sc.nextInt();
		System.out.println("입력값은 : "+i);
		
		
		if (i >= 900) {
					if(i>=1000) {			//1000 이상이면 아주많다
						System.out.println("아주 많다");
					}else {					//900이상 1000미만이면 많다
						System.out.println("많다");
					}
		}
		else if (i>=800) {		
			 if (i>=850) {					// 850이상이면 조금 많다
					System.out.println("조금 많다");
			 }else {						// 800~849라면 별로 없다
				System.out.println("별로없네");
			 }
		}
	}
}