// ???????? Scanner�� �̿��Ͽ�,  ��ȣ�� ������ ���ڸ� �Է� �ް�, split, indexOf, substring �� �̿��Ͽ� ��ȣ�� ������ �� ���ڸ� ����ϼ���.
import java.util.Scanner;
public class Split_and_indexOf_delete {

	public static void main(String[] args)throws Exception {
		// TODO Auto-generated method stub
	
		System.out.println("��ȣ ���� ���� �Է�:");		
		Scanner sc = new Scanner(System.in);
		String w = sc.next();
		System.out.println("�Է��Ѱ���:" + w);
		
		String getStr1[] = w.split("-");

		for(int k = 0; k<getStr1.length; k++) {

		System.out.println(getStr1[k]);

		}

		System.out.println(getStr1[0]+getStr1[1]+getStr1[2]);

		}

	
	
	
	
	
	
	
	
	
	
		
		
		
		
		/* String str = "-";
		String[] ���� = str.split("-");
		String str1  =  ����[0];
		String str2  =  ����[1];
		String str3  =  ����[2];

		System.out.println("str1:" + str1);
		System.out.println("str2:" + str2);
		System.out.println("str3:" + str3); */
}
}