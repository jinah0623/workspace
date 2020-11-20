public class Double_test {
	public static void main(String[] args) {
		int i = 100;
		int j = 3;
		
		double result_1 = (double) i/j; 		//소수점으로변경
		int result_2 = j % i; 					//FLOAT
		
		System.out.println("결과 1 : " + result_1);
		System.out.println("결과 2 : " + result_2);
	}

}

