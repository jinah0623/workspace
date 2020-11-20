
public class NNNNN {
	
	public static void main(String[] args) {
		int i = 10;
		long j = 10001;
		char c = 'C';
		int k = c ;
		Double d = 50.0;
		
		System.out.println("c: " +k);
		System.out.println("d: "+d);
		System.out.println("j" +j );
		System.out.println("i:" +i); 
		
		double result = (double)(i + j * k/d); 
		
		System.out.println("답은: "+result);
		
		
		
		int result2 = (int)result;
		System.out.println("정수로: "+result2);  
				
		
	}

}
