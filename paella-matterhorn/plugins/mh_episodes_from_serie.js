paella.plugins.EpisodesFromSerie = Class.create(paella.RightBarPlugin,{
	getSubclass:function() { return 'EpisodesFromSerie'; },

	getName:function() {
		return "es.upv.paella.matterhorn.EpisodesFromSerie";
	},

	buildContent:function(domElement) {
	
		var serieId = null; //paella.matterhorn.episode.mediapackage.series;
		var serieTitle = paella.matterhorn.episode.mediapackage.seriestitle;



		var episodesFromSerieTitle = document.createElement('div');
		episodesFromSerieTitle.id = 'episodesFromSerieTitle';
		episodesFromSerieTitle.className = 'episodesFromSerieTitle';
		episodesFromSerieTitle.innerHTML = "<span class='episodesFromSerieTitle_Bold'>" +paella.dictionary.translate("Videos in this serie:")+"</span> " + serieTitle;

		var episodesFromSerieListing = document.createElement('div');
		episodesFromSerieListing.id = 'episodesFromSerieListing';
		episodesFromSerieListing.className = 'episodesFromSerieListing';

	
		domElement.appendChild(episodesFromSerieTitle);
		domElement.appendChild(episodesFromSerieListing);


		var params = {limit:10, page:0};
		var mySearch = new paella.matterhorn.SearchEpisode(paella.player.config, params);
		mySearch.doSearch(params, document.getElementById('episodesFromSerieListing'));
	}
});

paella.plugins.episodesFromSerie = new paella.plugins.EpisodesFromSerie();