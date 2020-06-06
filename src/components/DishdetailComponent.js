import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
	renderComments(comments) {
        if (comments != null) {
            const comment = comments.map(review => {
                return (
                    <li key = {review.id}>
                        <p>{review.comment}</p> 
                        <p>-- {review.author} , {new Intl.DateTimeFormat("en-US", {year: "numeric", month: "short", day: "2-digit"}).format(new Date(review.date))}</p>
                    </li>
                );

            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
					<ul className="list-unstyled">
						{comment}
					</ul>
                </div>
            );
		}
		else
			return (
				<div></div>
			);
    }

	renderDish(dish) {
        if (dish != null) {
            return (
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle><h5>{dish.name}</h5></CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
            );
		}
		else {
            return (
                <div></div>
            );
        }
    }

	render() {
		const dish = this.props.dish;
		if (dish != null) {
			const dishItem =  this.renderDish(dish);
        	const commentItem = this.renderComments(dish.comments);
			return (
				<div className="row">
					{dishItem}
                	{commentItem}
				</div>
			);
		} 
		else 
			return (
				<div></div>
			);
	}
}

export default DishDetail;