import java.util.Scanner;

public class Practice_self5 {
	public static void main(String[] args) {
		boolean stop = false;
		int num;

		while(!stop) {		//최초 stop과 같이 false이므로 !입력
			int num1 =0;		//최대 5개의 값을 받고 초기화 시키지 않으면 아래에서 에러가 발생하므로 0으로 초기화.
			int num2 =0;
			int num3 =0;
			int num4 =0;
			int num5 =0;
			
			int cnt;
			System.out.println("어떤 연산을 하시겠어요? + - X / %");
			Scanner sc=new Scanner(System.in);
			String k = sc.next();	
			if(k.equals("%")) {		//%를 선택한다면 최대 2개의 값을 선택해 연산
				System.out.println("두개의 값을 입력하실 수 있습니다. ");
				System.out.println("첫번째 수를 입력하세요.");
				num1 = sc.nextInt();
				System.out.println("두번째 수를 입력하세요.");
				num2 = sc.nextInt();
			}

			if(k.equals("+")) {		// +++++++++++
				System.out.println("몇개의 숫자로 계산을 하시겠어요?");
				cnt = sc.nextInt();
				if(cnt==1 || cnt>5) { 		//1개이거나 5개이상일때
					System.out.println("너무 적거나 많이 넣었습니다");
					continue;		//처음부터 다시 시작
					
				
				}else {
						for(int i=1; i<=cnt; i++) {
							System.out.println(i+"번째 수를 입력하세요");
							if(i==1) {num1=sc.nextInt();}
							if(i==2) {num2=sc.nextInt();}
							if(i==3) {num3=sc.nextInt();}
							if(i==4) {num4=sc.nextInt();}
							if(i==5) {num5=sc.nextInt();}
						}	
						System.out.println(num1+num2+num3+num4+num5);
					if(cnt==2) {
					num = num1 + num2;
					System.out.println(num + "+" +num2+ "=" + num);
					
					if(cnt==3) {
					num = num1 + num2 + num3;
					System.out.println(num + "+" +num2+ "+" +num3 + "=" + num);
					
					if(cnt==4) {
					num = num1 + num2 + num3 + num4;
					System.out.println(num + "+" +num2+ "+" + num3+ "+" + num4 + "=" + num);
					
					if(cnt==5) {
					num = num1 + num2 + num3 + num4 + num5;
					System.out.println(num + "+" +num2+ "+"+ num3 + "+" +num4+"+" + num5 + "=" + num);
						}	

					System.out.println("몇개의 숫자로 계산을 하시겠어요?");
					cnt = sc.nextInt();
					if(cnt==1 || cnt>5) { 		//1개이거나 5개이상일때
						System.out.println("너무 적거나 많이 넣었습니다");
						continue;		//처음부터 다시 시작
					}
			if(k.equals("-")) {		//-----------
				System.out.println("몇개의 숫자로 계산을 하시겠어요?");
				cnt = sc.nextInt();
				if(cnt==1 || cnt>5) { 		//1개이거나 5개이상일때
					System.out.println("너무 적거나 많이 넣었습니다");
					continue;		//처음부터 다시 시작
										
				}else {
						for(int i=1; i<=cnt; i++) {
							System.out.println(i+"번째 수를 입력하세요");
							if(i==1) {num1=sc.nextInt();}
							if(i==2) {num2=sc.nextInt();}
							if(i==3) {num3=sc.nextInt();}
							if(i==4) {num4=sc.nextInt();}
							if(i==5) {num5=sc.nextInt();}
						}	
							System.out.println(num1+num2+num3+num4+num5);
					if(cnt==2) {
					num = num1 - num2;
					System.out.println(num + "-" +num2+ "=" + num);
						}		
					if(cnt==3) {
					num = num1 - num2 - num3;
					System.out.println(num + "-" +num2 + "-"+ num3 + "=" + num);
						}		
					if(cnt==4) {
					num = num1 - num2 - num3 - num4;
					System.out.println(num + "-" +num2+ "-"+ num3+ "-" +num4 + "=" + num);
						}		
					if(cnt==5) {
					num = num1 - num2 - num3 - num4 - num5;
					System.out.println(num + "-" +num2+ "-"+ num3 + "-"+num4+ "-"+ num5+ "-"+ "=" + num);
						}	
						System.out.println("몇개의 숫자로 계산을 하시겠어요?");
						cnt = sc.nextInt();
						if(cnt==1 || cnt>5) { 		//1개이거나 5개이상일때
							System.out.println("너무 적거나 많이 넣었습니다");
							continue;
						}	
				}
						
						
						
						System.out.println("시스템이 종료되었습니다.");
			}
		}


				
					
				/* if(k.equals("-")) {
				num = num1 - num2;
				System.out.println(num + "-" +num2+ "=" + num);
				}
				if(k.equals("/")) {
				num = num1 / num2;
				System.out.println(num + "/" +num2+ "=" + num);
				}
				if(k.equals("%")) {
				num = num2/num1*100;
				System.out.println(num1 + "/" +num2+ "X"+ 100 + "=" + num +"%");
			
				}
				System.out.println("계속 Y, 종료 N 입력");
				String yn = sc.next();
				if (yn.equals("Y") || yn.equals("y")) {
				System.out.println("----------------");
				continue;
					}
				if (yn.equals("N") || yn.equals("n")) {
				break; 
					}
				}
			}*/ 

