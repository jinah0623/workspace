
public class For_Test_3 {
	
	public static void main(String[] args) {
	
		int i = 0;
		int j = 0;
		for ( j = 1; j <= 100; j ++) {			//1�� 100�� �� ������ 1�� ���ϱ�
			i+=j;								//i=i+j
			System.out.println("���� i:" +i);
		}
		System.out.println("1~" + (j-1) + "��: " + i);
	}
}
