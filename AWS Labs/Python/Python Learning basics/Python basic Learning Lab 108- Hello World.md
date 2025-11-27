# Hello, World! Program – Lab README

## **Lab Overview**

Welcome to **Introduction to Programming** using **Python**. In this lab, you will:

* Access AWS Cloud9
* Create a Python file
* Write your first program: `Hello, World!`

Estimated completion time: **45 minutes**

---

## **Task 1: Accessing the AWS Cloud9 IDE**

![PLACEHOLDER](path/to/image.png)

1. Start your lab by choosing **Start Lab** at the top of your instructions.
2. Wait for **Lab status: ready**, then close the Start Lab panel.
3. Choose **AWS** at the top of the instructions.
4. The AWS Console opens in a new tab (allow pop-ups if prompted).
5. Go to **Services → Cloud9**.
6. In **Your environments**, open **reStart-python-cloud9**.
7. If any pop-ups appear:

   * Choose **Discard** for *.c9/project.settings warnings
   * Choose **No** for third-party content

 <img width="1361" height="562" alt="image" src="https://github.com/user-attachments/assets/eed7adbc-b92f-4873-b39c-15023a49c9a0" />
    

---

## **Task 2: Creating Your Python Exercise File**

1. In Cloud9, go to **File → New From Template → Python File**.
2. Delete the sample code.
3. Save the file as **hello-world.py** under:

  <img width="1362" height="683" alt="image" src="https://github.com/user-attachments/assets/328188c5-bd3b-4385-a32c-1d408fcc61d5" />

  <img width="1341" height="678" alt="image" src="https://github.com/user-attachments/assets/7c6a9e21-521f-4bb7-a55c-b741f0e40974" />

 

   ```
   /home/ec2-user/environment
   ```
5. Confirm the file ends with the **.py** extension.

---

## **Task 3: Accessing the Terminal**

![PLACEHOLDER](path/to/image.png)

1. Choose **+ → New Terminal**.
2. Run the following to show your working directory:

   ```bash
   pwd
   ```
3. Ensure the output shows:

   ```
   /home/ec2-user/environment
   ```
4. Confirm your Python file appears in this directory.

<img width="1092" height="528" alt="image" src="https://github.com/user-attachments/assets/11470e8a-3744-40a9-9616-84187fdf43c4" />


## **Task 4: Exercise 1 – Introducing Python**

Python is a high‑level, general‑purpose programming language.

### Check the Python versions installed:

Run:

```bash
python --version
python2 --version
python3 --version
```

You should see versions similar to:

```
Python 3.6.12
Python 2.7.18
Python 3.6.12
```

---
<img width="1082" height="155" alt="image" src="https://github.com/user-attachments/assets/872948c8-65d5-4c4b-ba4c-532fc06ad4ea" />


## **Task 5: Exercise 2 – Writing Your First Python Program**

1. Open **hello-world.py** from the file tree.
2. Enter the following code:

   ```python
   print("Hello, World")
   ```
3. Save the file.
4. Choose the **Run (Play)** button.
5. Confirm the output shows:

   ```
   Hello, World
   ```
   <img width="1358" height="589" alt="image" src="https://github.com/user-attachments/assets/bb7b6baf-9841-498f-a171-d013544f336f" />


🎉 **Congratulations! You completed your first Python program.**

---

## **End Lab**

When finished, choose **End Lab** to close the session.
