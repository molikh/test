import React from "react";
import { simplifyPaginatedResult } from "@tribeplatform/react-sdk/utils";
import { Post } from "@tribeplatform/gql-client/types";
import { useFeed } from "@tribeplatform/react-sdk/hooks";

import image from "../../assets/img/noimage.png";

import "./RecentPosts.scss";

function RecentPosts() {
	const { data } = useFeed({
		fields: {
			createdBy: {
				member: "basic",
			},
		},
		variables: {
			limit: 3,
		},
	});
	const { nodes: posts } = simplifyPaginatedResult<Post>(data);

	return (
		<div className="lg:w-5/5 pl-10 pr-10 m-auto mb-8 flex flex-wrap wp-recent-posts">
			<h1 className="wp-header basis-full	 text-center pt-5 pb-5 mb-12">
				Recent Tribe Posts
			</h1>
			{posts.map((post, i) => {
				return (
					<div
						className={
							"wp-post gap-2 flex flex-wrap lg:w-1/3  mb-8 postindex-" + i
						}
						key={post?.id}
					>
						<img className="post-image basis-full " src={image} alt="sample " />
						<div className="m-5 flex flex-col flex-grow">
							<a
								className="wp-post-link"
								href={post.url || "#"}
								target="_blank"
								rel="noreferrer"
							>
								{post.title}
							</a>
							<div className="flex mt-5 actions gap-2 text-xs text-gray-500">
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

export default RecentPosts;
