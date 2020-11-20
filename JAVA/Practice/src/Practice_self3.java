
// ???Scanner로 문자를 입력받고 문자가 20개이상이면 substring을 이용해 한글자씩 출력


import java.util.Scanner;

public class Practice_self3 {
	
	public static void main(String[] args)  {
		Scanner sc = new Scanner(System.in);
		System.out.println("문자를 입력하세요: ");		
		String i = sc.next();
		System.out.println("문자는: "+i); 

		int a = i.length();
		System.out.println("길이는: "+a);
		int c = a/2;
		
		
		if (a<=20) {
			
			for(int b=0; b<=c; b++) {			// 문자 길이가 0부터 시작하기 때문에 '=' 빼기,
			String j = i.substring(b,b+1);
			System.out.println(j);
					
			/* for(int m=c; m<a; m++) {
			String k = i.substring(c,a+1);
			System.out.println("나머지는: " +k);
				}*/
			}	
		}else {
			System.out.println("안돼");
			}
		}
	}
