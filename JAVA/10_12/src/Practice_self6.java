//???? scanner�� �Ἥ ���ڿ��� �޾� �ѱ��ھ� substring�� ���� str_array[]��� �迭 ������ �ְ� sys.out.println()���� ���.

import java.util.Scanner;

public class Practice_self6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc=new Scanner(System.in);
		System.out.println("���ڸ� �Է��ϼ���: ");		
		String i = sc.next();
		String k="";		//�ʱ�ȭ
		System.out.println("���ڴ�: "+i); 
		
		int l = i.length();		
		System.out.println("���̴�: "+l); 
		
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