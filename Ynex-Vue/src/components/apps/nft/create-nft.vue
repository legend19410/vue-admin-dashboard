<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import AuctionsCardComponent from "../../../shared/components/@spk/dashboard/nft-auctions-cards.vue";
import nft18 from "/images/nft-images/18.png";
import face1 from "/images/faces/1.jpg";
import Ethereum from "/images/crypto-currencies/square-color/Ethereum.svg";

export default {
    components: {
        PageHeader,
        AuctionsCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Create Nft",
                list: ['Apps', 'nft', 'Create Nft']
            },
            marketPlaceData: [
                { id: 1, image: nft18, auctionTime: '04hrs : 24m : 38s', likes: '0.47k', creatorImage: face1, creatorName: 'NFTNinja', creatorUsername: '@nftninja', title: 'Digital Dreamscape', subtitle: 'Highest Bid', highestBid: '0.24ETH', coinImage: Ethereum, tab: "art" },
            ],
            royalitieValue: null,
            royalitieOptions: ['Flat Royalty', ' Graduated Royalty', ' Tiered Royalty', ' Time-Limited Royalty', 'Customized Royalty'],
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9 col-xl-8">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Create NFT</div>
                </div>
                <div class="card-body">
                    <div class="row gy-3 justify-content-between">
                        <div class="col-xxl-3 col-xl-12">
                            <div class="create-nft-item">
                                <label class="form-label">Upload NFT</label>
                                <div class="d-flex justify-content-center">
                                    <DropZone :maxFiles="1" class="filepond--root"
                                        data-style-panel-layout="compact circle" :uploadOnDrop="true"
                                        :multipleUpload="true" :parallelUpload="3" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-8 col-xl-12">
                            <div class="row gy-3">
                                <div class="col-xl-12">
                                    <label for="input-placeholder" class="form-label">NFT Title</label>
                                    <input type="text" class="form-control" id="input-placeholder"
                                        placeholder="eg:Neo-Nebulae">
                                </div>
                                <div class="col-xl-12">
                                    <label for="nft-description" class="form-label">NFT Description</label>
                                    <textarea class="form-control" id="nft-description" rows="3"
                                        placeholder="Enter Description"></textarea>
                                </div>
                                <div class="col-xl-12">
                                    <label for="nft-link" class="form-label">External Link</label>
                                    <input type="text" class="form-control" id="nft-link"
                                        placeholder="External Link Here">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="row gy-3">
                                <div class="col-xl-6">
                                    <label for="nft-creator-name" class="form-label">Creator Name</label>
                                    <input type="text" class="form-control" id="nft-creator-name"
                                        placeholder="Enter Name">
                                </div>
                                <div class="col-xl-6">
                                    <label for="nft-price" class="form-label">NFT Price</label>
                                    <input type="text" class="form-control" id="nft-price" placeholder="Enter Price">
                                </div>
                                <div class="col-xl-4">
                                    <label for="nft-size" class="form-label">NFT Size</label>
                                    <input type="text" class="form-control" id="nft-size" placeholder="Enter Size">
                                </div>
                                <div class="col-xl-4">
                                    <label for="nft-royality" class="form-label">Royality</label>
                                    <multiselect1 :searchable="false" :show-labels="false" v-model="royalitieValue"
                                        placeholder="Choose Royalities" :options="royalitieOptions"></multiselect1>
                                </div>
                                <div class="col-xl-4">
                                    <label for="nft-property" class="form-label">Property</label>
                                    <input type="text" class="form-control" id="nft-property"
                                        placeholder="Enter Property">
                                </div>
                                <div class="col-xl-12">
                                    <label class="form-label d-block">Method</label>
                                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="strap-material" id="strap1" checked>
                                        <label class="btn btn-sm btn-outline-primary text-default z-0" for="strap1"><i
                                                class="ti ti-tag me-1 align-middle fs-15 d-inline-block"></i>Fixed
                                            Price</label>
                                        <input type="radio" class="btn-check" name="strap-material" id="strap2">
                                        <label class="btn btn-sm btn-outline-primary text-default z-0" for="strap2"><i
                                                class="ti ti-users fs-15 me-1 align-middle d-inline-block"></i>Open For
                                            Bids</label>
                                        <input type="radio" class="btn-check" name="strap-material" id="strap3">
                                        <label class="btn btn-sm btn-outline-primary text-default z-0" for="strap3"><i
                                                class="ti ti-hourglass-low fs-15 me-1 align-middle d-inline-block"></i>Timed
                                            Auction</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <a href="javascript:void(0);" class="btn btn-primary btn-wave waves-effect waves-light">Create
                        NFT</a>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        NFT Preview Here
                    </div>
                </div>
                <div class="card-body">
                    <AuctionsCardComponent :card="card" v-for="(card, index) in marketPlaceData" :key="index"
                        :showButton="false" customCardClass=" mb-0 shadow-none border" />
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>
<style scoped></style>
