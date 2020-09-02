public class StringRev { 
  
    public static void main(String[] args) 
    { 
		String originalString = "This is a coding test. I like java so much. This is my day.";
		if(originalString != null && originalString.trim().length() > 0){
			String lines[] = originalString.split("\\.");
			if(null != lines && lines.length > 0) {
				String reversedString = ""; 
				for (int i = 0; i <= lines.length - 1; i++) {
					if(lines[i] != null && lines[i].trim().length() > 0) {
						String words[] = lines[i].trim().split(" ");
						if(null != words && words.length > 2) {
							for (int j = words.length - 3; j >= 0; j--) {
								reversedString += " " + words[j];
							}
							
							for (int j = words.length - 2; j <= words.length - 1; j++) {
								reversedString += " " + words[j];
							}
							reversedString += ".";
						} else {
							reversedString += lines[i] + ". ";
						}
					}
				}
				reversedString = reversedString.trim();
				System.out.println("Original String:" + originalString); 	
				System.out.println("Reversed String:" + reversedString); 	
			}
		}
		else {System.out.println("Please Enter Valid String.");}
    } 
} 