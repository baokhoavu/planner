Day - Wlkr25km - "Wlkr25km": "[[T6:[[S450:59458:count]]]]",
Night - nightWlk - "nightWlk": "[[T6:[[S450:59456:count]]]]",
Night/Day - twoDayWlk - "twoDayWlk": "[[T6:[[S450:59459:count]]]]",

// *** apidata.js *** //

// Create mutatable variables
owTo19Donations: String,
owTo19RegFee: String,
owTo19RFI: String,
owTo19Crews: String,
owTo19Virtual: String,
owTo19Walkers: String,
owTo1925kmWalkers: String,
owTo19NightWalkers: String,
owTo192day: String,
	// Create dynamic variables
    owto19DonDaily: String,
    owto19RegDaily: String,
    owto19RFIDaily: String,
    owto19CrewsDaily: String,
    owto19VirtualDaily: String,
    owto19WalkersDaily: String,
    owto1925kmWalkersDaily: String,
    owto19NightWalkersDaily: String,
    owto192dayDaily: String,
    	// Create variables and set them with live data
        var removeDollarOwTo19v1 = locals2.getEventTotal.toronto.to19.totalDonation;
        var removeRegOwTo19v1 = locals2.getEventTotal.toronto.to19.regFee;
        var owTo19Virtual = locals2.getEvenToal.toronto.to19.virtual;
        var owTo1925kmWalkers = locals2.getEventTotal.toronto.to19.Wlkr25km;       
        var owTo19NightWalkers = locals2.getEventTotal.toronto.to19.nightWlk;
        var owTo192day = locals2.getEventTotal.toronto.to19.twoDayWlk;
	        var numberOwTo19v1 = Number(removeDollarOwTo19v1.replace(/[^0-9\.-]+/g,""));
            var numberRegOwTo19v1 = Number(removeRegOwTo19v1.replace(/[^0-9\.-]+/g,""));                                   
		        var owto19DonationSub = numberOwTo19v1;
		        var owto19RegSub = numberRegOwTo19v1;
		        var owto19RfiSub = locals2.getEventTotal.toronto.to19.rfi;
		        var owto19CrewsDailySub = locals2.getEventTotal.toronto.to19.crews;
		        var owto19TotalWalkers = parseFloat(owTo19NightWalkers) + parseFloat(owTo1925kmWalkers) + parseFloat(owTo182day);
		        var owto19VirtualDailySub = owto19Virtual;
		        var owto19WalkersDailySub = owto19TotalWalkers;
		        var owTo1925kmWalkersDaily = locals2.getEventTotal.toronto.to19.Wlkr25km;
		        var owTo19NightWalkersDaily = locals2.getEventTotal.toronto.to19.nightWlk;
		        var owTo192dayDaily = locals2.getEventTotal.toronto.to19.Wlkr15km;
			        var newOwTo19DonDaily = '$' + owto19DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
			        var newOwTo19RegDaily = '$' + owto19RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
						owTo19Donations: locals2.getEventTotal.toronto.to19.totalDonation,
					    owTo19RegFee: locals2.getEventTotal.toronto.to19.regFee,
					    owTo19RFI: locals2.getEventTotal.toronto.to19.rfi,
					    owTo19Crews: locals2.getEventTotal.toronto.to19.crews,
					    owTo19Virtual: locals2.getEventTotal.toronto.to19.virtual,
					    owTo19Walkers: owto19TotalWalkers,
					    owTo1925kmWalkers: owTo1925kmWalkers,
					    owTo19NightWalkers: owTo19NightWalkers,
					    owTo192day: owTo192day,
					        owto19DonDaily: newOwTo19DonDaily,
					        owto19RegDaily: newOwTo19RegDaily,
					        owto19RFIDaily: owto19RfiSub,
					        owto19CrewsDaily: owto19CrewsDailySub,
					        owTo19VirtualDaily: owto19VirtualDailySub,
					        owto19WalkersDaily: owto19WalkersDailySub,
					        owto1925kmWalkersDaily: owTo1925kmWalkersDaily,
					        owto19NightWalkersDaily: owTo19NightWalkersDaily,
					        owto192dayDaily: owTo192dayDaily,

