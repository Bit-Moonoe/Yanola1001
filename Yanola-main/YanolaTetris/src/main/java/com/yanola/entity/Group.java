package com.yanola.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Table(name="GROUP")
@Builder
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
@Entity
@Component
public class Group {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "GROUP_ID")
	@ManyToOne
	@JoinColumn(name = "HOST_ID")
	private String groupId;
	
	@Column(nullable = false)
	private int groupRank;
	
	@Column(nullable = false)
	private int groupMileage;

	@Column
	private Date purchaseDateOfItem;
	
	@Column
	private Date usedDateOfItem;
	
	@Column(nullable = false)
	private int groupScore;
	
	
	@Override
	public String toString() {
		return "Group [groupId=" + groupId + ", groupRank=" + groupRank + ", groupMileage=" + groupMileage
				+ ", purchaseDateOfItem=" + purchaseDateOfItem + ", usedDateOfItem=" + usedDateOfItem + ", groupScore="
				+ groupScore + "]";
	}
	
	
	@ToString
	@Builder
	@Getter @Setter
	public static class Request{
		
	
		private String groupId;
		
		private int groupRank;
		
		private int groupScore;
		
		public static Group toEntity(final Request request) {
			
		}
		
		
		
		
	}
	
	
	
}
