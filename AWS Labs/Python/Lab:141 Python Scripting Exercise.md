# Challenge Lab:141 Python Scripting Exercise

## **Introduction**
This lab guides you through creating a Python script that finds all prime numbers between 1 and 250, displays them on the terminal, and saves the results to a file. The lab uses an Amazon EC2 Linux host and SSH for connecting.

---

## **Lab Overview**
In this lab, you will:
- Launch an EC2 instance named **Linux Host**.
- Connect to the instance via SSH.
- Write a Python 3 script to calculate prime numbers.
- Store the results in a file named `results.txt`.
- Verify that the script works as expected.

---

## **Lab Architecture**
![EC2 Instance Architecture](./images/ec2-architecture.png)
*Placeholder for EC2 instance architecture diagram*

The Linux Host runs Python 3 and will execute the script to generate prime numbers.

---

## **Objectives**
By the end of this lab, you should be able to:
1. Connect to a remote Linux host via SSH.
2. Write and execute Python 3 scripts.
3. Save output to a file in Linux.
4. Verify file contents using terminal commands.

---

## **Lab Steps**

### **Step 1: Launch Your Lab Environment**
1. Click **Start Lab**.
2. Wait for **Lab status: ready**.
3. Close the panel.

---

### **Step 2: Save Lab Details**
1. Click **Details → Show**.
2. Copy the **public IP address** to a text file named `Lab Details.txt`.

---

### **Step 3: Connect via SSH (Windows)**
1. Download **labsuser.ppk** from the **Details** panel.
2. Open **PuTTY**.
3. Enter the public IP in **Host Name**.
4. Under **Connection → SSH → Auth**, select `labsuser.ppk`.
5. Click **Open** to connect.

   <img width="1083" height="472" alt="image" src="https://github.com/user-attachments/assets/f29a2651-2377-4a89-8d98-6fc5f9079663" />
   <img width="1342" height="591" alt="image" src="https://github.com/user-attachments/assets/fbd47c91-1546-4105-81ea-9cf00f067ffb" />

<img width="1085" height="494" alt="image" src="https://github.com/user-attachments/assets/54d084d5-f3c7-4f20-b78a-41580205b1b9" />

<img width="1087" height="495" alt="image" src="https://github.com/user-attachments/assets/17801666-c410-473e-ab5d-865dea58bd35" />
<img width="1090" height="509" alt="image" src="https://github.com/user-attachments/assets/3bfb4d86-f928-483e-9952-19871c0e87dc" />
<img width="663" height="500" alt="image" src="https://github.com/user-attachments/assets/7e4687d7-b3c2-4f28-9691-d9d0aceca629" />





---

### **Step 4: Create Python Script**
1. Create a new file:
```bash
nano prime_numbers.py




prime_numbers = []


for number in range(1, 251):
    is_prime = True  

    
    if number < 2:
        is_prime = False
    else:
        for i in range(2, number):
            if number % i == 0:
                is_prime = False
                break  

    
    if is_prime:
        prime_numbers.append(number)


print("Prime numbers from 1 to 250 are:")
print(prime_numbers)


with open("results.txt", "w") as file:
    for prime in prime_numbers:
        file.write(str(prime) + "\n")

print("The results have been saved to results.txt")


````
<img width="657" height="406" alt="image" src="https://github.com/user-attachments/assets/c5adf70e-721b-4327-80e4-96df1abd5b36" />
<img width="655" height="417" alt="image" src="https://github.com/user-attachments/assets/92b1ae13-3680-4cdc-a2bf-d46aaa589218" />





### Step 5: Run the Python Script

In your terminal, run:

python3 prime_numbers.py

<img width="1335" height="578" alt="image" src="https://github.com/user-attachments/assets/20fa6e2b-9418-4ae7-9b07-113d17ee2fd2" />
<img width="423" height="340" alt="image" src="https://github.com/user-attachments/assets/16738bf6-602e-486c-9eda-6010bf6e6e43" />


You should see all prime numbers from 1 to 250 displayed.

Check that the file results.txt is created by running:

cat results.txt

<img width="375" height="208" alt="image" src="https://github.com/user-attachments/assets/5e4acef7-1aac-4823-915d-a1c54f9f1b05" />



You should see the same prime numbers saved in the file.

### Step 6: Note the Script Location

To see the absolute path of your script:

pwd


### Combine this with your file name to get the full path. For example:

/home/ec2-user/prime_numbers.py

<img width="283" height="63" alt="image" src="https://github.com/user-attachments/assets/bae91068-7c45-4772-b0f5-59cf672bcedb" />



✅ Lab Complete! You now have:

A working Python script for prime numbers.

A results file saved as results.txt.

The absolute path noted for future reference.
