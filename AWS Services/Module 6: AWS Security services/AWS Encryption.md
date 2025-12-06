# Cloud Security and Cryptography Fundamentals

Welcome to this repository dedicated to the core concepts of cloud security.
This guide covers essential topics ranging from the fundamental models of information security to specific hardware implementations used in modern cloud architecture.

---

## 1. Defense in Depth
Security is rarely about a single solution. The concept of Defense in Depth relies on a layered approach, 
ensuring that if an attacker penetrates one layer, they still face additional barriers. This model spans from physical security all the way down to the data itself.


<img width="1920" height="1080" alt="#1 Defence in Depth" src="https://github.com/user-attachments/assets/165cc90d-584b-45c6-9318-0ad1ad32d1e8" />


## 2. The CIA Triad
The CIA Triad is the industry standard model for information security.
It helps organizations balance the need to keep data private, ensure it hasn't been tampered with, and make sure it is accessible to authorized users when needed.


<img width="1920" height="1080" alt="#2 CIA Triad" src="https://github.com/user-attachments/assets/ee2598c5-8624-4e03-b85c-3eb921cf0f89" />


## 3. Vulnerabilities and OWASP
In software development, vulnerabilities are flaws or weaknesses that can be exploited by malicious actors.
This section highlights common security risks found in applications, such as those listed by OWASP, which can lead to data breaches or system compromise.


<img width="1920" height="1080" alt="#3 Vulnerabilities" src="https://github.com/user-attachments/assets/24ed86f0-da8a-4b6a-b4ab-e62dcd132800" />


## 4. Introduction to Encryption
Cryptography is the practice of securing communication.
This overview introduces the basic concepts of how readable data (plaintext) is transformed into unreadable data (ciphertext) to prevent unauthorized access.


<img width="1920" height="1080" alt="#4 Encryption" src="https://github.com/user-attachments/assets/a4365032-aa30-4b54-baa1-1393462d9500" />


## 5. Cyphers
A cypher is the algorithm used to perform the encryption or decryption process.
This section touches on the historical context of codes and the mechanisms used to scramble information.


<img width="1920" height="1080" alt="#5 Cyphers" src="https://github.com/user-attachments/assets/ecc2e0d6-ea97-4906-a166-351326cdac70" />


## 6. Cryptographic Keys
Encryption relies on keys to lock and unlock data.
This visual explains the critical difference between Symmetric encryption (using one shared key) and Asymmetric encryption (using a public and private key pair).

<img width="1920" height="1080" alt="#6 Cryptographic Keys" src="https://github.com/user-attachments/assets/a50581f3-5718-4d52-afd8-36ef0769e130" />


## 7. Hashing and Salting
Unlike encryption, hashing is a one-way process primarily used for integrity checks and storing passwords securely.
Adding a "salt" (random data) to the hash strengthens it against common attacks like rainbow tables.


<img width="1920" height="1080" alt="#7 Hashing and Salting" src="https://github.com/user-attachments/assets/476702d6-7306-4393-94bf-1e109278fcb2" />

## 8. Digital Signatures
To ensure trust in digital communications, we use digital signatures. 
This process verifies the authenticity of a message and ensures non-repudiation,
confirming that the sender is who they claim to be and that the message hasn't been altered.


<img width="1920" height="1080" alt="#8 Digital Signatures and Signing" src="https://github.com/user-attachments/assets/40c83e2a-2a50-46ef-b60d-5d8ca377981e" />


## 9. Encryption: In-Transit vs At-Rest
Data exists in different states, and security measures must adapt accordingly.
This comparison details how we protect data while it is moving across the internet (In-Transit) versus when it is stored on a disk or database (At-Rest).


<img width="1920" height="1080" alt="#9 In-Transit vs At-Rest Encryption" src="https://github.com/user-attachments/assets/c0e660b3-60a2-472f-8c0a-cf62484af06b" />


## 10. Hardware Security Modules (HSM)
For the most sensitive cryptographic operations, software storage isn't enough.
An HSM is a physical computing device that safeguards and manages digital keys, providing a higher level of security compliance.


<img width="1920" height="1080" alt="#10 Hardware Security Module" src="https://github.com/user-attachments/assets/e495f102-8e04-440b-8370-174f623c313b" />

## 11. AWS KSM
<img width="1920" height="1080" alt="#11 AWS KSM" src="https://github.com/user-attachments/assets/97f1caa8-bd87-4b6c-b0ae-80983b97fe24" />


## 12. Cloud HSM

<img width="1920" height="1080" alt="#12 Cloud HSM" src="https://github.com/user-attachments/assets/ccc42fc0-f89a-4c45-9410-8228c87b2d55" />

---

## Conclusion
Understanding these security pillars is crucial for building resilient cloud applications. 
From the theoretical layers of the CIA triad to the physical implementation of HSMs, these concepts form the backbone of a secure IT infrastructure.
