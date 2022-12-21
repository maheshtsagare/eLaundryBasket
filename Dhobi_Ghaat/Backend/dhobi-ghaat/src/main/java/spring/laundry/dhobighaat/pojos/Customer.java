package spring.laundry.dhobighaat.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="customers")
@JsonIgnoreProperties(value = { "addresses" , "orders" })
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer customerId;
	
	private String firstName;
	private String lastName;
	
	@Column(unique = true)
	private String email;
	
	@Column(unique = true)
	private String mobNo;
    
	private String password;
	
	@OneToOne(mappedBy = "customer", cascade = CascadeType.ALL)
	private Address addresses;
	
	@OneToMany(mappedBy = "customers", cascade = CascadeType.ALL)
	private List<Order> orders=new ArrayList<>();
	
	public Customer() {
	
	}

	public Customer(Integer customerId, String mobNo, String password, String firstName, String lastName, String email) {
		super();
		this.customerId = customerId;
		this.mobNo = mobNo;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	public Address getAddresses() {
		return addresses;
	}

	public void setAddresses(Address addresses) {
		this.addresses = addresses;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {   
		this.customerId = customerId;
	}

	public String getMobNo() {
		return mobNo;
	}

	public void setMobNo(String mobNo) {
		this.mobNo = mobNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", mobNo=" + mobNo + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", email=" + email + "]";
	}
	
	/*
	 * public void addaddress(Address addr) {
	 * 
	 * addresses.add(addr); addr.setCustomer(this); }
	 * 
	 * public void removeaddress(Address addr) {
	 * 
	 * addresses.remove(addr); addr.setCustomer(null); }
	 */
}
