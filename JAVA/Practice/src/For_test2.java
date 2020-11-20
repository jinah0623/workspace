import java.util.Scanner;

public class For_test2 {
	

	public static void main(String[] args) {	
		Scanner sc = new Scanner(System.in);
		System.out.println("숫자를 입력하세요:");
		
		int num = sc.nextInt();		
		int j;
		int i;
		
		if (num <= 10) {			//숫자는 10이하
			for(i=num; i<=10; i++) {	//i는 숫자랑 같고, i가 10이 될때까지 +1
				for(j=1; j<=10; j++) {	
					System.out.println("*** " + num + "단***");
					
				for(j=1; j<=10; j++) {
					System.out.println(i + "X" + j + "=" +(i*j));
					}
				}
			}
		}else {
				 System.out.println("못해요");
		}
	}
}

	
			
			
			
	
			


