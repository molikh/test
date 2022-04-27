import React from "react";
import { simplifyPaginatedResult } from "@tribeplatform/react-sdk/utils";
import { Post } from "@tribeplatform/gql-client/types";
import { useFeed } from "@tribeplatform/react-sdk/hooks";

import image from "../../assets/img/noimage.png";

import "./SidebarRecentPostImage.scss";

function SidebarRecentPost() {
	const { data } = useFeed({
		fields: {
			createdBy: {
				member: "basic",
			},
		},
		variables: {
			limit: 10,
		},
	});
	const { nodes: posts } = simplifyPaginatedResult<Post>(data);

	return (
		<div className="lg:w-2/6 pl-10 pr-10 m-auto flex flex-col wp-tribe-recent-posts">
			<h1 className="wp-header text-center pt-5 pb-5 mb-5">
				Recent Tribe Posts
			</h1>
			{posts.map((post, i) => {
				return (
					<div className="flex  mb-8" key={post?.id}>
						<img className="post-image mt-1 mr-3" src={image} alt="sample" />
						<div className="flex flex-col flex-grow">
							<a
								className="wp-post-link"
								href={post.url || "#"}
								target="_blank"
								rel="noreferrer"
							>
								{post.title}
							</a>
							<div className="flex actions gap-2 text-xs text-gray-500">
								<div>{post.reactionsCount} upvotes</div>|
								<div>{post.repliesCount} comments</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SidebarRecentPost;
