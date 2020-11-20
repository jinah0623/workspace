import java.util.Scanner;

public class Mix_practice {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("1st:");
		int num1 = sc.nextInt();
		System.out.println("2nd: ");
		int num2 = sc.nextInt();
		
		int i;
		boolean b = (num1< num2);	//첫번째 숫자가 두번째 숫자보다 작으면
		
		if (b == true){		//조건이 맞으면
			for(i=num1; i<=num2; i++) {		
				if(i%2==0) {		//숫자가 짝수일 때
					System.out.println("짝수: "+i);
				}else{System.out.println("홀수: "+ i);
		
				}
			}
			
		}else {			// False 이라면
			System.out.println("숫자가 정확하지 않습니다.");
		}
				
				}
	}