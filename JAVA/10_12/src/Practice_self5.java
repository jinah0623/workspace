import java.util.Scanner;

public class Practice_self5 {
	public static void main(String[] args) {
		boolean stop = false;
		int num;

		while(!stop) {		//���� stop�� ���� false�̹Ƿ� !�Է�
			int num1 =0;		//�ִ� 5���� ���� �ް� �ʱ�ȭ ��Ű�� ������ �Ʒ����� ������ �߻��ϹǷ� 0���� �ʱ�ȭ.
			int num2 =0;
			int num3 =0;
			int num4 =0;
			int num5 =0;
			
			int cnt;
			System.out.println("� ������ �Ͻðھ��? + - X / %");
			Scanner sc=new Scanner(System.in);
			String k = sc.next();	
			if(k.equals("%")) {		//%�� �����Ѵٸ� �ִ� 2���� ���� ������ ����
				System.out.println("�ΰ��� ���� �Է��Ͻ� �� �ֽ��ϴ�. ");
				System.out.println("ù��° ���� �Է��ϼ���.");
				num1 = sc.nextInt();
				System.out.println("�ι�° ���� �Է��ϼ���.");
				num2 = sc.nextInt();
			}

			if(k.equals("+")) {		// +++++++++++
				System.out.println("��� ���ڷ� ����� �Ͻðھ��?");
				cnt = sc.nextInt();
				if(cnt==1 || cnt>5) { 		//1���̰ų� 5���̻��϶�
					System.out.println("�ʹ� ���ų� ���� �־����ϴ�");
					continue;		//ó������ �ٽ� ����
					
				
				}else {
						for(int i=1; i<=cnt; i++) {
							System.out.println(i+"��° ���� �Է��ϼ���");
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

					System.out.println("��� ���ڷ� ����� �Ͻðھ��?");
					cnt = sc.nextInt();
					if(cnt==1 || cnt>5) { 		//1���̰ų� 5���̻��϶�
						System.out.println("�ʹ� ���ų� ���� �־����ϴ�");
						continue;		//ó������ �ٽ� ����
					}
			if(k.equals("-")) {		//-----------
				System.out.println("��� ���ڷ� ����� �Ͻðھ��?");
				cnt = sc.nextInt();
				if(cnt==1 || cnt>5) { 		//1���̰ų� 5���̻��϶�
					System.out.println("�ʹ� ���ų� ���� �־����ϴ�");
					continue;		//ó������ �ٽ� ����
										
				}else {
						for(int i=1; i<=cnt; i++) {
							System.out.println(i+"��° ���� �Է��ϼ���");
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
						System.out.println("��� ���ڷ� ����� �Ͻðھ��?");
						cnt = sc.nextInt();
						if(cnt==1 || cnt>5) { 		//1���̰ų� 5���̻��϶�
							System.out.println("�ʹ� ���ų� ���� �־����ϴ�");
							continue;
						}	
				}
						
						
						
						System.out.println("�ý����� ����Ǿ����ϴ�.");
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
				System.out.println("��� Y, ���� N �Է�");
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

