import React from "react";
import "./NewsPage.scss";

import NewsList from "../components/NewsList";
import SidebarRecentPost from "../components/sidebar-recent-posts/SidebarRecentPost";
import SidebarRecentPostImage from "../components/sidebar-recent-posts-image/SidebarRecentPostImage";
import RecentPosts from "../components/recent-posts/RecentPosts";

function NewsPage() {
	return (
		<div className="container">
			<SidebarRecentPost />
			<br />
			<SidebarRecentPostImage />
			<br />
			<RecentPosts />
		</div>
	);
}

export default NewsPage;
