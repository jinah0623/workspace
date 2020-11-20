//???? scanner를 써서 문자열을 받아 한글자씩 substring을 한후 str_array[]라는 배열 변수에 넣고 sys.out.println()으로 출력.

import java.util.Scanner;

public class Practice_self6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc=new Scanner(System.in);
		System.out.println("문자를 입력하세요: ");		
		String i = sc.next();
		String k="";		//초기화
		System.out.println("문자는: "+i); 
		
		int l = i.length();		
		System.out.println("길이는: "+l); 
		
		String str_array[]= new String[l];
		
		for(int j = 0; j < l; j++) {
			
			 str_array[j] = i.substring(j, j+1);
			 
		System.out.println(str_array[j]);
			}
		
		for(int m=0 ; m<l ; m++) {
		 k += str_array[m];
		}
		
		System.out.println(k);
	}
}