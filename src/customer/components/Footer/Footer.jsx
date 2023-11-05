import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>

          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6" guttorButton>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>

          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6" guttorButton>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Supports
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>

          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Api Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>

          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" guttorButton>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6" guttorButton>
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12} >
            <Typography variant="body2" component="p" align="center" >
                &copy; 2023 My Company. All rights reserved.
            </Typography>

            <Typography variant="body2" component="p" align="center" >
               Made By Saurabh Maurya
            </Typography>

            <Typography variant="body2" component="p" align="center" >
                Icon Made by S.M
            </Typography>


        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
