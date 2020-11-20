
public class For_Test_3 {
	
	public static void main(String[] args) {
	
		int i = 0;
		int j = 0;
		for ( j = 1; j <= 100; j ++) {			//1이 100이 될 때까지 1씩 더하기
			i+=j;								//i=i+j
			System.out.println("지금 i:" +i);
		}
		System.out.println("1~" + (j-1) + "합: " + i);
	}
}
