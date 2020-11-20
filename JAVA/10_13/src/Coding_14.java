
public class Coding_14 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		for (int a=2; a<=9; a++) { 			//2단부터 9단까지 출력
			System.out.println(a+"단:");
			
			for(int b=1; b<10; b++) {
				System.out.println(a+ "*"+ b + "=" + a*b);
			}
		}
	}
}