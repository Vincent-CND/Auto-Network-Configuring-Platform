Auto Network Configuring Platform

A web-based platform that automates network device configuration using NodeJS, Express, and Ansible.

This project demonstrates how to integrate a frontend interface with backend automation to dynamically generate configuration files and execute Ansible playbooks for network devices.


Overview

This platform allows users to:

Submit network configuration parameters (VLAN, DHCP, OSPF, etc.)

Automatically generate Ansible variable files (vars.yml)

Dynamically create or update playbooks (site.yml)

Execute ansible-playbook directly from the backend

Apply configuration to network devices via SSH


Requirements

Make sure you have:

NodeJS v18+

Ansible installed

SSH access to target network devices

If on Windows → WSL recommended for Ansible

Check Ansible installation:

ansible-playbook --version

Installation

Clone the repository: git clone https://github.com/Vincent-CND/Auto-Network-Configuring-Platform.git
cd Auto-Network-Configuring-Platform

Install dependencies: npm install

Configure Inventory

Example for local testing: 

[local]
localhost ansible_connection=local

Example for Cisco IOS device:
[ios_switches]
l3-sw ansible_host=192.168.1.1

[ios_switches:vars]
ansible_network_os=cisco.ios.ios
ansible_connection=network_cli
ansible_user=admin
ansible_password=admin123
ansible_become=yes
ansible_become_method=enable

Running the Application
node server.js
Open browser: http://localhost:3000
