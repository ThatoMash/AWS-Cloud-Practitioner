# Challenge Lab: Python Scripting Exercise

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
### Step 5: Run the Python Script

In your terminal, run:

python3 prime_numbers.py


You should see all prime numbers from 1 to 250 displayed.

Check that the file results.txt is created by running:

cat results.txt


You should see the same prime numbers saved in the file.

### Step 6: Note the Script Location

To see the absolute path of your script:

pwd


### Combine this with your file name to get the full path. For example:

/home/ec2-user/prime_numbers.py


✅ Lab Complete! You now have:

A working Python script for prime numbers.

A results file saved as results.txt.

The absolute path noted for future reference.
