// ???????? Scanner를 이용하여,  기호를 포함한 문자를 입력 받고, split, indexOf, substring 을 이용하여 기호를 정리한 후 문자를 출력하세요.
import java.util.Scanner;
public class Split_and_indexOf_delete {

	public static void main(String[] args)throws Exception {
		// TODO Auto-generated method stub
	
		System.out.println("기호 포함 문자 입력:");		
		Scanner sc = new Scanner(System.in);
		String w = sc.next();
		System.out.println("입력한값은:" + w);
		
		String getStr1[] = w.split("-");

		for(int k = 0; k<getStr1.length; k++) {

		System.out.println(getStr1[k]);

		}

		System.out.println(getStr1[0]+getStr1[1]+getStr1[2]);

		}

	
	
	
	
	
	
	
	
	
	
		
		
		
		
		/* String str = "-";
		String[] 문자 = str.split("-");
		String str1  =  문자[0];
		String str2  =  문자[1];
		String str3  =  문자[2];

		System.out.println("str1:" + str1);
		System.out.println("str2:" + str2);
		System.out.println("str3:" + str3); */
}
}